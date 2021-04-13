import React, { Fragment, useContext, useEffect } from 'react'
import ContactContext from '../../context/contact/contactContext'
import ContactItem from './ContactItem';

const Contacts = () => {
    const contactContext = useContext(ContactContext);
    const { contacts, filtered, getContacts } = contactContext

    useEffect(() => {
        getContacts();
    }, [])

    if (contacts !== null && contacts.length === 0) {
        return <h4>Please add a contact</h4>
    }

    return (
        <Fragment>
            {filtered !== null ? filtered.map(contact => (
                <ContactItem contact={contact} key={contact._id} />
            )) : contacts.map(contact => (
                <h3>
                    <ContactItem contact={contact} key={contact._id} />
                </h3>
            ))}

        </Fragment>
    )
}

export default Contacts
