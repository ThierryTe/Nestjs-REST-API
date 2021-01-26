import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JobDTO } from 'src/dtos/job.dto';
import { Job } from 'src/models/jobs.interfacte';
import { JobsService } from './jobs.service';

@ApiTags('jobs')
@Controller('jobs')
export class JobsController {
    constructor(private readonly jobService: JobsService){}
    
    @Get()
    // @Render('jobs/index') pour afficher l'interface graphique
    @ApiOkResponse({description: 'Liste de tous les jobs'})
    @ApiForbiddenResponse({description: 'Accès interdit'})
     root(){
        return this.jobService.findAll()
        .then(result =>result ?{
         jobs: result
        }: {jobs: []});
     }
    //Fonction lister un travail
    @Get(':id')
    @ApiOkResponse({description: 'Affichage d\'un job avec succès'})
    @ApiForbiddenResponse({description: 'Accès interdit'})
    findById(@Param('id') id: string): Promise<Job>{
        return this.jobService.findById(id)
        .then(result =>{
            if(result){
                return result;
            }else {
                throw new HttpException('Travail non trouvé', HttpStatus.NOT_FOUND);
            }
        })
        .catch(() =>{
            throw new HttpException('Travail non trouvé', HttpStatus.NOT_FOUND);
        });
    }
  //Fonction de création
    @Post()
    @ApiCreatedResponse({description: 'Création d\'un job réussi'})
    @ApiForbiddenResponse({description: 'Accès interdit'})
    createJobs(@Body() jobDto: JobDTO): Promise<Job> {
        return this.jobService.createJob(jobDto);
    }
    //fonction de mise à jour
    @Put(':id')
    @ApiOkResponse({description: 'Mise à jour d\'un job'})
    @ApiForbiddenResponse({description: 'Accès interdit'})
    updateJobs(@Param('id') id: string , @Body() job:JobDTO): Promise<Job> {
        return this.jobService.updateJob(id,job);
    }
    //fonction de suppression
    @Delete(':id')
    @ApiOkResponse({description: 'Suppression d\'un job'})
    @ApiForbiddenResponse({description: 'Accès interdit'})
    deleteJobs(@Param('id') id: string ): Promise<Job> {
        return this.jobService.deleteJob(id);
    }
}
