const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const coursevideoSchema = Schema({

    course_name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
      curriculum: [{
    
        title:{
            type: String,
            required: true, 
        },
        content:[{
          topic_name:{
            type: String,
            required: true, 
          },
          topic_video_duration:{
            type: Number,
            required: true, 
          },
          topic_video_url:{
            type: String,
            required: true, 
          }

        }]
      
      }]
});

module.exports = mongoose.model("CourseVideo", coursevideoSchema);