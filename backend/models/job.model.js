import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },

     Information: {
        type: String,
        required: true
    },

       about : {
        type: String,
        required: true
    },
    applylink: {
        type: String,
        required: true
    },
    requirements: {
        type: String
    },
    salary: {
        type: Number,
        
    },
    experienceLevel:{
        type:String,
        
    },
    location: {
        type: String,
        
    },
    jobType: {
        type: String,
        
    },
    position: {
        type: String,
        
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    applications: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Application',
        }
    ]
},{timestamps:true});

export const Job = mongoose.model("Job", jobSchema);
export default Job;