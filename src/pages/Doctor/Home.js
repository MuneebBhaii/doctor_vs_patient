import React from 'react'
import { Link } from 'react-router-dom'

export default function stickyWall() {
  return (
    <main className="container-fluid bg-dark">
      <div className="container">
        <div className="row mt-3">
          <div className="col">
            <div className="card p-2 p-md-3 p-lg-4">
              <h3 className='text-center'>Schedule Details</h3>
              <div className="row">
                <div className="col">Saturday</div>
                <div className="col">3:00pm to 9:00pm</div>
              </div>
              <div className="row">
                <div className="col">Sunday</div>
                <div className="col">Close</div>
              </div>
              <div className="row">
                <div className="col">Monday</div>
                <div className="col">2:00pm to 10:00pm</div>
              </div>
              <div className="row">
                <div className="col">Tuesday</div>
                <div className="col">3:00pm to 9:00pm</div>
              </div>
              <div className="row">
                <div className="col">Wednesday</div>
                <div className="col">2:00pm to 10:00pm</div>
              </div>
              <div className="row">
                <div className="col">Thursday</div>
                <div className="col">3:00pm to 9:00pm</div>
              </div>
              <div className="row">
                <div className="col">Friday</div>
                <div className="col">4:00pm to 10:00pm</div>
              </div>
              <div className="row mt-3">
                <div className="col text-center">
                  <Link className='btn btn-outline-primary' to='/Schedule'>Change Schedule</Link>
                  </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card p-2 p-md-3 p-lg-4">
              <h3 className='text-center mb-4'>Appointment Details</h3>
              <div className="row mt-2">
                <div className="col">Appointment</div>
                <div className="col">Patients</div>
              </div>
              <div className="row  mt-1">
                <div className="col">Today</div>
                <div className="col">30</div>
              </div>
              <div className="row  mt-1">
                <div className="col">Tomarrow</div>
                <div className="col">40</div>
              </div>
              <div className="row  mt-1">
                <div className="col">Total</div>
                <div className="col">480</div>
              </div>
              <div className="row mt-5">
                <div className="col text-center">
                  <Link className='btn btn-outline-primary' to='/Appointment'>Manage Appointment</Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className='text-white text-center mt-4'>Total Patient</h2>
        <div className="row mt-2">
                <div className="col">
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr className="tr">
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>PhoneNo</th>
                                    <th>SlotNo</th>
                                    <th>Reports</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>Ali</td>
                                  <td>03137832982</td>
                                  <td>4</td>
                                  <td>head pain</td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>bilal</td>
                                  <td>03675832982</td>
                                  <td>5</td>
                                  <td>hair</td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>Ahamd</td>
                                  <td>03137832982</td>
                                  <td>6</td>
                                  <td>head</td>
                                </tr>
                                <tr>
                                  <td>4</td>
                                  <td>Akmal</td>
                                  <td>03137832982</td>
                                  <td>7</td>
                                  <td>pain</td>
                                </tr>
                                <tr>
                                  <td>5</td>
                                  <td>usman</td>
                                  <td>0353532982</td>
                                  <td>8</td>
                                  <td>legs pain</td>
                                </tr>
                                <tr>
                                  <td>6</td>
                                  <td>zeerak</td>
                                  <td>0333532982</td>
                                  <td>9</td>
                                  <td>gala</td>
                                </tr>
                                <tr>
                                  <td>7</td>
                                  <td>Amjad</td>
                                  <td>03137832982</td>
                                  <td>10</td>
                                  <td>head pain</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
      </div>
    </main>
  )
}
