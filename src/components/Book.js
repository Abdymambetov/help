import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getOnePhotoAction } from '../redux/slices/photosSlice'

function Book() {
    const {id} = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getOnePhotoAction(id))
    }, [])
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }
    const {onPhoto} = useSelector(state => state.book)
    console.log(onPhoto);
  return (
    <div>
        <button onClick={goBack}>back</button>
        <h2>name: {onPhoto?.title}</h2>
        <h2>body: {onPhoto?.id}</h2>
        <img src={onPhoto?.url} alt="stupid"/>
    </div>
  )
}

export default Book