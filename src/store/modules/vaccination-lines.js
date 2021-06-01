// import {app} from '../../models/app'
export const vaccinationLines = {
    namespaced: true,
    state: () => ({
        list: [
            {
                id: 1,
                history:[
                    {
                        amount: 20,
                        timestamp: ""
                    },
                    {
                        amount: 30,
                        timestamp: ""
                    },
                    {
                        amount: 50,
                        timestamp: ""
                    },
                    
                ]
            },
            {
                id: 2,
                history:[
                    {
                        amount: 20,
                        timestamp: ""
                    },
                    {
                        amount: 30,
                        timestamp: ""
                    },
                    {
                        amount: 50,
                        timestamp: ""
                    },
                    
                ]
            },
            {
                id: 3,
                history:[
                    {
                        amount: 20,
                        timestamp: ""
                    },
                    {
                        amount: 30,
                        timestamp: ""
                    },
                    {
                        amount: 50,
                        timestamp: ""
                    },
                    
                ]
            },
            {
                id: 4,
                history:[
                    {
                        amount: 20,
                        timestamp: ""
                    },
                    {
                        amount: 30,
                        timestamp: ""
                    },
                    {
                        amount: 50,
                        timestamp: ""
                    },
                    
                ]
            },
            {
                id: 5,
                history:[
                    {
                        amount: 20,
                        timestamp: "",
                        
                    },
                    {
                        amount: 30,
                        timestamp: ""
                    },
                    {
                        amount: 50,
                        timestamp: ""
                    },
                    
                ]
            },
            {
                id: 6,
                history:[
                    {
                        amount: 20,
                        timestamp: ""
                    },
                    {
                        amount: 30,
                        timestamp: ""
                    },
                    {
                        amount: 50,
                        timestamp: ""
                    },
                    
                ]
            }
        ]
    }),

    getters: {
        list: state => state.list,
    },
    actions: {
        showLine({ dispatch }, id) {
            dispatch("fetchLines", id);
        }
    },
    mutations: {
        fetchLines(state, id) {
           
            console.log(id);
        },

    },
}
