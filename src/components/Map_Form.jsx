import React, { useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import Map from './map'

const MapForm = () => {
    const [location, setLocation] = useState({
        name: '',
        description: '',
        latitude: '',
        longitude: '',
    })
    const [showMap, setShowMap] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        setShowMap(true)
        // setLocation({
        //     name: '',
        //     description: '',
        //     latitude: '',
        //     longitude: '',
        // })
    }
    const isFormValid = () => {
        const { name, description, latitude, longitude } = location
        return name && description && latitude && longitude
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setLocation((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    return (
        <>
            {isFormValid() && showMap ? (
                <div className='map_component'>
                    <Map className='w-25 h-25' coordinates={location} />
                </div>
            ) : (
                <p className='bg-warning text-center p-2 m-3 rounded'>
                    Fill out the form to see the map
                </p>
            )}
            <Form
                onSubmit={handleSubmit}
                className='m-3 bg-dark w-50  rounded mx-auto p-4'
            >
                <FloatingLabel
                    controlId='name'
                    label='Location Name'
                    className='mb-3'
                >
                    <Form.Control
                        onChange={handleChange}
                        type='text'
                        name='name'
                        placeholder='Location name'
                        value={location.name}
                    />
                </FloatingLabel>
                <FloatingLabel
                    controlId='description'
                    label='Location Description'
                    className='mb-3'
                >
                    <Form.Control
                        onChange={handleChange}
                        name='description'
                        as='textarea'
                        placeholder='Write location description here...'
                        rows={3}
                        value={location.description}
                    />
                </FloatingLabel>
                <FloatingLabel
                    controlId='latitude'
                    label='Location Latitude'
                    className='mb-3'
                >
                    <Form.Control
                        onChange={handleChange}
                        name='latitude'
                        placeholder='Location latitude'
                        type='number'
                        value={location.latitude}
                    />
                </FloatingLabel>
                <FloatingLabel
                    controlId='longitude'
                    label='Location Longitude'
                    className='mb-3'
                >
                    <Form.Control
                        onChange={handleChange}
                        name='longitude'
                        placeholder='Location Longitude'
                        type='number'
                        value={location.longitude}
                    />
                </FloatingLabel>

                <Button
                    disabled={isFormValid() ? false : true}
                    className='w-75 mx-auto bg-info-subtle text-primary d-flex justify-content-center align-items-center'
                    variant='primary'
                    type='submit'
                >
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default MapForm
