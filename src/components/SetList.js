import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchSets, toggleFavoriteSet } from '../store/actions/setActions'

function SetList(props) {

  // useEffect to load data from localStorage if exists on first load;
  // ensure to save results in localStorage so that page refreshes won't need to
  // do remote requests...
  // trigger remote requests only by explicit button click

  useEffect(() => {

    props.fetchSets();

  },[props.sets])



  return (
    <section className='card-set-list'>
      <form id='form-card-set-search'>
        <input type='text' />
        <button onClick={(e)=>{e.preventDefault()}}>Search</button>
      </form>
      <div>
        {props.sets && props.sets.map(item => {
          return (
            <div>
              <h3>{item.name}</h3>
            </div>
          )
        })}
      </div>
    </section>
  )
}

const mapToProps = state => {
  return {
    sets: state.sets,
    isFetching: state.isFetching,
  }
}

export default connect(mapToProps, {
  fetchSets,
  toggleFavoriteSet,
})(SetList);