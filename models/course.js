const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = Schema({
    category:{
 type: mongoose.Schema.Types.ObjectId,
   ref: "Category",
    },
 course_name:{
    type: String,
    required: true,
 },
    description: {
    type: String,
    required: true,
  
  },
  whatuwilllearn: {
    type: Array,
    required: true,
  
  },
  requirements: {
    type: Array,
    required: true,
   
  },
  course_data:{
    total_hours:{
        type: Number,
        required: true, 
    },
    enrolled_students:{
    type: Number,
    required: true,
    } ,
    extra_data:[{
        type: String,
    }]
  },
  curriculum: [{

    title:{
        type: String,
        required: true, 
    },
    topics:{
    type: Array,
    required: true,
    }
  
  }],
  coursefaq: [{
    title:{
        type: String,
        required: true, 
    },
    topics:{
    type: String,
    required: true,
    }
   
  }],

    author_name:{
        type: String,
        required: true, 
    },
    author_img:{
        type: String 
    },
    author_des:{
    type: String,
    required: true,
    },
   
  
  related_courses:{
      type:Array,

  }
 
});

module.exports = mongoose.model("Course", courseSchema);
