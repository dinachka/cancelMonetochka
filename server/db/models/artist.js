'use strict';
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Artist extends Model {
    static associate({ Song }) {
      this.hasMany(Song, { foreignKey: 'artistID' });
    }
  }
  Artist.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Artist',
  });
  return Artist;
};
