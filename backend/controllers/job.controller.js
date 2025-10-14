import isAuthenticated from "../middlewares/isAuthenticated.js";
import { Job } from "../models/job.model.js";


// admin post krega job

export const postJob = async (req, res) => {
  try {
    const { title, description, about, applylink, companyId } = req.body;
    const userId = req.id;
    // console.log("🧠 req.body:", req.body);
    // console.log("🧠 req.id:", req.id);

    if (!title || !description || !companyId || !userId) {
      return res.status(400).json({
        message: "Missing required fields.",
        success: false,
      });
    }

    const job = await Job.create({
      title,
      description,
      about,
      applylink,
      company: companyId,
      created_by: userId,
    });

    console.log("Job created:", job);

    return res.status(201).json({
      message: "New job created successfully.",
      job,
      success: true,
    });
  } catch (error) {
    console.error("Error in postJob:", error);
    return res.status(500).json({
      message: "Server error while posting job.",
      success: false,
    });
  }
};











// student k liye
export const getAllJobs = async (req, res) => {
    try {
        const keyword = req.query.keyword || "";
        const query = {
            $or: [
                { title: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } },
            ]
        };
        const jobs = await Job.find(query).populate({
            path: "company"
        }).sort({ createdAt: -1 });
        if (!jobs) {
            return res.status(404).json({
                message: "Jobs not found.",
                success: false
            })
        };
        return res.status(200).json({
            jobs,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}
// student
export const getJobById = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path:"applications"
        });
        if (!job) {
            return res.status(404).json({
                message: "Jobs not found.",
                success: false
            })
        };
        return res.status(200).json({ job, success: true });
    } catch (error) {
        console.log(error);
    }
}
// admin kitne job create kra hai abhi tk
export const getAdminJobs = async (req, res) => {
    try {
        const adminId = req.id;
        const jobs = await Job.find({ created_by: adminId }).populate({
            path:'company',
            createdAt:-1
        });
        if (!jobs) {
            return res.status(404).json({
                message: "Jobs not found.",
                success: false
            })
        };
        return res.status(200).json({
            jobs,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}