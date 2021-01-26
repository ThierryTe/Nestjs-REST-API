import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JobDTO } from 'src/dtos/job.dto';
import { Job } from 'src/models/jobs.interfacte';

@Injectable()
export class JobsService { 
    constructor(@InjectModel('Job')  private jobModel: Model<Job>){}

    async findAll(): Promise<Job[]>{
        return await this.jobModel.find({});
    }

    async findById(id: String): Promise<Job>{
         return await this.jobModel.findOne({_id: id});
    }
    async createJob(job:JobDTO): Promise<Job>{
        const createJob = new this.jobModel(job);
        return await createJob.save();
    }
    async updateJob(id: String, job: JobDTO): Promise<Job> {
        return this.jobModel.findByIdAndUpdate(id, job,{new: true} );
    }
    async deleteJob(id: String): Promise<Job>{
        return await this.jobModel.findByIdAndRemove(id);
    }
}
