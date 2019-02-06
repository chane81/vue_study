<template>
    <div>
        <ul>
            <li v-for="todoItem in todoItems" v-bind:key="todoItem" class='shadow'>
                {{ todoItem }}
                <span class="removeBtn" v-on:click="removeTodo">
                    <i class="fas fa-trash-alt"></i>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            todoItems: []
        }
    },
    methods: {
        removeTodo: function() {

        }
    },
    // 인스턴스가 생성될때 created() 함수 실행됨
    created: function() {
        if (localStorage.length > 0) {
            // for (var i = 0; i < localStorage.length; i++) {
            //     if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
            //         this.todoItems.push(localStorage.key(i));
            //         //console.log(localStorage.key(i));
            //     }
            // }

            for (let [key, value] of Object.entries(localStorage)) {
                if (key !== 'loglevel:webpack-dev-server') {
                    console.log(key, value);
                    this.todoItems.push(value);
                }
            }
        }
    }
}
</script>

<style scoped>
ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
}
li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
}
.removeBtn {
    margin-left: auto;
    color: #de4343;
}
.checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
}
.checkBtnCompleted {
    color: #b3adad;
}
.textCompleted {
    text-decoration: line-through;
    color: #b3adad;
}
</style>
