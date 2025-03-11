import React from 'react';

const EditHero = props => {
  if (props.selectedHero) {
    return (
      <div>
        <div className="editfields">
          <div>
            <label>Id: </label>
            {props.addingHero
              ? <input
                  type="number"
                  name="id"
                  placeholder="Id"
                  value={props.selectedHero.id}
                  onChange={props.onChange}
                />
              : <label className="value">
                  {props.selectedHero.id}
                </label>}
          </div>
          <div>
            <label>Name: </label>
            <input
              name="name"
              value={props.selectedHero.name}
              placeholder="Name"
              onChange={props.onChange}
            />
          </div>
          <div>
            <label>Description: </label>
            <input
              name="saying"
              value={props.selectedHero.saying}
              placeholder="Description"
              onChange={props.onChange}
            />
          </div>
        </div>
        <button onClick={props.onCancel}>Cancel</button>
        <button onClick={props.onSave}>Save</button>
      </div>
    );
  } else {
    return <div />;
  }
};

export default EditHero;
