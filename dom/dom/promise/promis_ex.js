var users = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "dat",
  },
  {
    id: 3,
    name: "Steve",
  },
];


var comments = [
  {
    id: 1,
    user_id: 1,
    comment: 'hi',
  },
  {
    id: 2,
    user_id: 2,
    comment: 'xin chao',
  },
  {
    id: 3,
    user_id: 3,
    comment: ' konichiwa'
  },
];

// lay comment
// lay user_id
// lay name
// fake api fake timeout
function getComments(user_id) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () { resolve(comments) }, 1000);
  })
}

function getUresId(uresId) {
  return new Promise(function (resolve, reject) {
    var result = users.filter(function (user) {
      return uresId.includes(user.id);
    });
    setTimeout(function () { resolve(result); }, 1000)

  });
};

getComments()
  .then(function (comments) {
    var users_id = comments.map(function (comment) {
      return comment.user_id;
    });

    return getUresId(users_id)
      .then(function (result) {
        return {
          result: result,
          comments: comments,
        }

      });

  })
  .then(function (data) {
    console.log(data)
  });
