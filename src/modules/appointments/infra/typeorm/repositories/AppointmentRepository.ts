import { EntityRepository, Repository } from 'typeorm';

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';

import Appointment from '../entities/Appointment';

@EntityRepository(Appointment)
// extending the class to the Repository class using the model as a param
class AppointmentsRepository extends Repository<Appointment>
  implements IAppointmentsRepository {
  // always when you create an async function, the return will be a promise
  public async findByDate(date: Date): Promise<Appointment | undefined> {
    const findAppointment = await this.findOne({
      where: { date },
    });

    return findAppointment;
  }
}

export default AppointmentsRepository;
