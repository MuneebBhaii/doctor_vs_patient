import React from 'react'

export default function Schedule() {
  return (
    <main className='container d-flex justify-content-center'>
      <div className="card w-100 py-2 px-1 p-sm-3 p-md-3">
        <h2 className='text-center mb-4'>Schedule</h2>
        <div className="row">
          <div className="col days">
            <h3>Days</h3>
          </div>
          <div className="col spaceBeteen">
            <span className='h4'>Start Time</span>
            <span className='h4'>End Time</span>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col">
            <h3>saturday</h3>
          </div>
          <div className="col spaceBeteen">
            <input type="time" name="" id="" />
            <input type="time" name="" id="" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3>sunday</h3>
          </div>
          <div className="col spaceBeteen">
            <input type="time" name="" id="" />
            <input type="time" name="" id="" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3>Monday</h3>
          </div>
          <div className="col spaceBeteen">
            <input type="time" name="" id="" />
            <input type="time" name="" id="" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3>Tuesday</h3>
          </div>
          <div className="col spaceBeteen">
            <input type="time" name="" id="" />
            <input type="time" name="" id="" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3>Wednesday</h3>
          </div>
          <div className="col spaceBeteen">
            <input type="time" name="" id="" />
            <input type="time" name="" id="" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3>Thusday</h3>
          </div>
          <div className="col spaceBeteen">
            <input type="time" name="" id="" />
            <input type="time" name="" id="" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3>Friday</h3>
          </div>
          <div className="col spaceBeteen">
            <input type="time" name="" id="" />
            <input type="time" name="" id="" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col d-flex justify-content-end">
            <button className='btn btn-outline-primary'>Save</button>
            </div>
        </div>
      </div>
    </main>
  )
}
