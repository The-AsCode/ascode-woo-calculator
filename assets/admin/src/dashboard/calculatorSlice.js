import { createSlice } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';


let initialState ={
        calculator: {
            calculatorName: 'test calculator',
            description: 'description',
            inputType: ''
        },
        fields: [
            {
                id: 1,
                name: 'asdf',
                value: 'dasfad'
            }
        ]
    };

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        handleCalculatorNameChange : ( state, e) => {
            state.calculator.calculatorName = e.payload;
        },
        handleDescriptionChange : ( state, e) => {
            state.calculator.description = e.payload;
        },
        handleTypeChange : ( state, e) => {
            state.calculator.description = e.payload;
        },
        handleNameChange : ( state, e) => {
            state.fields = state.fields.map(item=>{
                if(item.id === e.payload.id) {
                    return {
                        ...item,
                        name: e.payload.value
                    }
                } else {
                    return item;
                }
            })
        },
        handleValueChange : ( state, e) => {
            state.fields = state.fields.map(item=>{
                if(item.id === e.payload.id) {
                    return {
                        ...item,
                        value : e.payload.value
                    }
                } else {
                    return item;
                }
            })
        },
        handleAddSection : ( state, {payload}) => {
            state.fields.push({
                id: payload,
                name: '',
                value: ''
            });
        },
        handleRemoveSection : ( state, index) => {
            if (state.fields.length === 1) {
                return; // Prevent removing the first field if it's the only one
            }
            state.fields = state.fields.filter(item=>item.id !== index.payload);
        },
        // handleSave: (state, {navigate}) => {
        //     console.log(navigate);
        //     let data = {
        //         'action': 'ascode_save_calculator_info_action',
        //         'calculatorInfo': [state],
        //         '_ajax_nonce': ascodeWooCalculatorDashboard.nonce,
        //     };
        //
        //     jQuery.post(ajaxurl, data, (response) => {
        //         // const navigate = useNavigate();
        //         // if(response.success){
        //         //     navigate('/');
        //         // }
        //         alert(response.data.message);
        //     });
        // }
    }

})

export const { handleCalculatorNameChange, handleDescriptionChange,handleTypeChange, handleNameChange, handleValueChange, handleAddSection, handleRemoveSection } = calculatorSlice.actions;
export default calculatorSlice.reducer;