import {ref} from 'vue'
export default function counterForCredit(){
    const creditSize = ref('')
    const month = ref('')
    const persent = ref('')
    const totalPersent = ref('')

    function totalCredit(){
       totalPersent.value =  creditSize.value / 100 * persent.value * month.value
       console.log(totalPersent.value);
    }

    return{
        totalPersent,
        month,
        persent,
        creditSize,
        totalCredit
    }



}