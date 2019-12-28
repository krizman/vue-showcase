import Vue from "vue"
import Vuex from "vuex";

Vue.use(Vuex)

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: {
        varieties: [
            {
                id: 1,
                value: "Ruderalis"
            },
            {
                id: 2,
                value: "Pine cone"
            },
            {
                id: 3,
                value: "Short Joe"
            }
        ],
        fields: {
            "1327296": {
                id: 1327296,
                name: "BO_6542",
                hectares: 36.08,
                crop: "Corn",
                varietyId: 2,
                cloverPlanted: true,
                ecoCert: true,
                acidicSoil: false
            },
            "1327297": {
                id: 1327297,
                name: "BO_6543",
                hectares: 3.08,
                crop: "Soy",
                varietyId: 1,
                cloverPlanted: true,
                ecoCert: true,
                acidicSoil: false
            },
            "1327298": {
                id: 1327298,
                name: "BO_6544",
                hectares: 4.08,
                crop: "Beans",
                varietyId: 3,
                cloverPlanted: false,
                ecoCert: true,
                acidicSoil: true
            }
        }
    }
});
