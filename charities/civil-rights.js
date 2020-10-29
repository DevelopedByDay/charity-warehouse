const { Schema, model } = require('mongoose');

const civilSchema = new Schema(
    {
      advocatesInternational: {
          url: `https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=6263`
      },  

      childrenOfNewYork: {
          url: `https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=10426`
      },

      americanCivilLiberties: {
          url: `https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=3247`
      },

      immigrationCouncil: {
          url: `https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=15472`
      },

      sexualHealth: {
          url: `https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=13405`
      },

      chicagoWomen: {
          url: `https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=10054`
      },

      coloradoChildren: {
          url: `https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=14399`
      },

      electronicFrontier: {
          url: `https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=7576`
      },

      equalJustice: {
          url: `https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=6228`
      },

      americanHumanist: {
          url: `https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=17830`
      }
    }
)