const { Schema, model } = require('mongoose');

const environmentSchema = new Schema(
    {
      allianceGreatLakes: {
          url: `https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=11613`
      },  

      amazonConservation: {
          url: `https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=7141`
      },

      americanForest: {
          url: `https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=5418`
      },

      americanRivers: {
          url: `https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=3285`
      },

      appalachianClub: {
          url: `https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=3304`
      },

      climateReality: {
          url: `https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=12771`
      },

      desertBotanical: {
          url: `https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=3617`
      },

      grandCanyon: {
          url: `https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=5749`
      },

      yellowstone: {
          url: `https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=8187`
      },

      rainforestFoundation: {
          url: `https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=7663`
      }
    }
)