import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';
import {NAME_ASC, NAME_DESC, ALL_ROLES} from './enum';

Vue.use(Vuex);

function orderBy(state, userList) {
    switch (state.sortBy) {
        case NAME_ASC:
            return userList.sort((a, b) => {
                const arrA = a.name.split(" ");
                const arrB = b.name.split(" ");
                return arrA[arrA.length - 1].localeCompare(arrB[arrB.length - 1]);
            });
        case NAME_DESC:
            return userList.sort((a, b) => {
                const arrA = a.name.split(" ");
                const arrB = b.name.split(" ");
                return arrB[arrB.length - 1].localeCompare(arrA[arrA.length - 1]);
            });
        default:
            return userList;
    }
}

function filteredBy(state) {
    if (state.filteredRole === ALL_ROLES) {
        return state.userList;
    }
    return state.userList.filter(userListItem => userListItem.role === state.filteredRole);
}

export default new Vuex.Store({
    state: {
        userList: [],
        roleList: [ALL_ROLES],
        sortBy: "",
        filteredRole: ALL_ROLES,
        errors: []
    },

    getters: {
        getUserList: state => {
            let userList = filteredBy(state);
            return orderBy(state, userList);
        },
        getRoleList: state => [...state.roleList, ...new Set(state.userList.map(userListItem => userListItem.role))]
    },

    mutations: {
        setUserList(state, payload) {
            state.userList = payload;
        },
        addUser(state, payload) {
            state.userList.push(payload);
        },
        updateUser(state, payload) {
            const foundIndex = state.userList.findIndex(userListItem => userListItem.id === payload.id)
            state.userList.splice(foundIndex, 1, payload);
        },
        setSortBy(state, payload) {
            state.sortBy = payload;
        },
        setFilteredRole(state, payload) {
            state.filteredRole = payload;
        }
    },

    actions: {
        async setUserList({commit}) {
            try {
                const res = await axios.get('http://localhost:3000/users');

                commit("setUserList", res.data);
            } catch (err) {
                this.errors.push(err);
            }
        },
        async addUser(context, formData) {
            try {
                formData.hobbies = formData.hobbies.split(",").map(item => item.trim());
                const res = await axios.post('http://localhost:3000/users', formData);
                context.commit("addUser", res.data);
            } catch (err) {
                this.errors.push(err);
            }
        },
        async updateUser(context, formData) {
            try {
                if (formData.firstSelectedTime === undefined) {
                    formData.firstSelectedTime = formData.lastSelectedTime = Date.now();
                } else {
                    formData.lastSelectedTime = Date.now();
                }
                formData.selectionCount === undefined ? formData.selectionCount = 1: formData.selectionCount += 1;

                const res = await axios.put(`http://localhost:3000/users/${formData.id}`, formData);
                context.commit("updateUser", res.data);
            } catch (err) {
                this.errors.push(err);
            }
        },
        setSortBy(context, payload) {
            context.commit("setSortBy", payload);
        },
        setFilteredRole(context, payload) {
            context.commit("setFilteredRole", payload);
        }
    }
});

