const { Schema, model } = require('mongoose');

const artsSchema = new Schema(
    {
      actorsFund: {
          url: `https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=5994`
      },  

      classicalPortland: {
          url: `https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=8198`
      },

      americanBallet: {
          url: `https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=3335`
      },

      museumNaturalHistory: {
          url: `https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=3276`
      },

      puppetryArts: {
          url: `https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=10255`
      },

      chicagoShakespeare: {
          url: `https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=5268`
      },

      coloradoRadio: {
          url: `https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=9720`
      },

      computerHistory: {
          url: `https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=8714`
      },

      milwaukeeArt: {
          url: `https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=5310`
      },

      minnesotaRadio: {
          url: `https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=4108`
      }
    }
)