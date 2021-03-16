'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define('Comments', {
    text: DataTypes.STRING
  }, {});
  Comments.associate = function(models) {
    // associations can be defined here
  };
  return Comments;
};