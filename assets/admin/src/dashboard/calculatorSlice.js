import { createSlice } from '@reduxjs/toolkit';


let initialState = {
    calculator: {
        calculatorName: '',
        description: '',
        inputType: ''
    },
    fields: [
        {
            id: 1,
            name: '',
            value: ''
        }
    ],
    edit: {
        calculatorId: '',
        buttonText: 'Save Calculator',
        page: 'Add New Calculator',
        action: 'ascode_save_calculator_info_action'
    }
};

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        handleCalculatorNameChange: (state, e) => {
            state.calculator.calculatorName = e.payload;
        },
        handleDescriptionChange: (state, e) => {
            state.calculator.description = e.payload;
        },
        handleTypeChange: (state, e) => {
            state.calculator.description = e.payload;
        },
        handleNameChange: (state, e) => {
            state.fields = state.fields.map(item => {
                if (item.id === e.payload.id) {
                    return {
                        ...item,
                        name: e.payload.value
                    }
                } else {
                    return item;
                }
            })
        },
        handleValueChange: (state, e) => {
            state.fields = state.fields.map(item => {
                if (item.id === e.payload.id) {
                    return {
                        ...item,
                        value: e.payload.value
                    }
                } else {
                    return item;
                }
            })
        },
        handleAddSection: (state, { payload }) => {
            state.fields.push({
                id: payload,
                name: '',
                value: ''
            });
        },
        handleRemoveSection: (state, index) => {
            if (state.fields.length === 1) {
                return; // Prevent removing the first field if it's the only one
            }
            state.fields = state.fields.filter(item => item.id !== index.payload);
        },
        handleUpdateCalculator: (state, { payload }) => {
            state = Object.assign(state, payload[0]);
            state.edit.page = 'Edit Calculator';
            state.edit.buttonText = 'Update Calculator';
            state.edit.action = 'ascode_update_calculator_info_action';
            state.edit.calculatorId = payload[1];
        }
    }

})

export const { handleCalculatorNameChange, handleDescriptionChange, handleTypeChange, handleNameChange, handleValueChange, handleAddSection, handleRemoveSection, handleUpdateCalculator } = calculatorSlice.actions;
export default calculatorSlice.reducer;