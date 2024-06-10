<script lang="ts">
 import { defineComponent, ref } from 'vue';
 import { CalculatorApp } from '@/calculator/CalculatorApp';

 export default defineComponent({
 setup() {
 const selectedOperation = ref('Add');
 const number1 = ref(0);
 const number2 = ref(0);
 const result = ref<number | null>(null);

 const calculate = () => {
 const calculator = CalculatorApp.getCalculatorFromChoice(selectedOperation.value);
 if (calculator) {
 try {
 result.value = calculator.calculate(number1.value, number2.value);
 } catch (error: any) {
 console.error("Erro:", error.message);
 result.value = null;
 }
 }
 };

 return { selectedOperation, number1, number2, result, calculate };
 }
 });
 </script>

