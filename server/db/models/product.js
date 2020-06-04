const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isIn: [['blends', 'teas']]
    }
  },
  description: {
    type: Sequelize.STRING
  },
  imgUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue:
      'https://images-na.ssl-images-amazon.com/images/I/61DUD8wBXFL._AC_SL1500_.jpg',
    validate: {
      notEmpty: true
    }
  }
})

module.exports = Product
