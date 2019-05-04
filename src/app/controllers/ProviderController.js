const { Appointment, User } = require('../models')
const { Op } = require('sequelize')
const moment = require('moment')

class ProviderController {
  async index (req, res) {
    const today = moment(new Date())
    const appointments = await Appointment.findAll({
      include: [{ model: User, as: 'User' }],
      where: {
        provider_id: req.session.user.id,
        date: {
          [Op.between]: [
            today.startOf('day').format(),
            today.endOf('day').format()
          ]
        }
      }
    })
    console.log(appointments)
    return res.render('provider/index', { appointments, moment })
  }
}

module.exports = new ProviderController()
