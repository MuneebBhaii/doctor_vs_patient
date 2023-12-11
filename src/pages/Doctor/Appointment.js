import React from 'react'

export default function Appointment() {
  return (
    <main className='container-fluid'>
      <div className="container">

        <h2 className='text-center mb-5'>Today Appointment</h2>
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
