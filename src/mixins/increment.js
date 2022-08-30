import {ref} from 'vue'
export default function increment(){
    const counter = ref('')

    function incrementCount(){
        console.log(counter.value);
    }

    return{
        counter,
        incrementCount
    }
}