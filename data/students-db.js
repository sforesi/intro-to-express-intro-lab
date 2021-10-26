const students = [
  {text: 'Kagan Kingery', beard: true, _id: 125223},
  {text: 'Peter Tran', beard: false, _id: 127904},
  {text: 'Seb Foresi', beard: false, _id: 139608},
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the students
    if (Object.keys(conditions).length === 0) return callback(null, students)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

export { 
	find
}