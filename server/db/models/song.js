'use strict';

const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    static associate({ Artist }) {
      this.belongsTo(Artist, { foreignKey: 'artistID' });
    }
  }
  Song.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    artistID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Song',
  });
  return Song;
};
