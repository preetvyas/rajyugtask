const studentReducer = (state = [],action) => {

switch(action.type){

case 'ADD_STUDENT':
let stateCopy = [...state,action.payload];
localStorage.setItem('students',JSON.stringify(stateCopy));
return stateCopy

case 'DELETE_STUDENT':
stateCopy = state.filter( x => x.id !== action.payload);
localStorage.setItem('students',JSON.stringify(stateCopy));
return stateCopy
    
case 'UPDATE_STUDENT':

stateCopy = state.map((student) => {
    const {id,name,country,city,salary} = action.payload;
    if(student.id === id)
    {
    student.name = name;
    student.country = country;
    student.city = city;
    student.salary = salary;
    }
    return student;
})
localStorage.setItem('students',JSON.stringify(stateCopy));
return stateCopy

default:
    return state;
}

}
export default studentReducer;