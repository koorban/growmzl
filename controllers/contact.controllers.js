import Contact from '../models/contact.model';

const createContact = async (req, res) => {
    const contact = new Contact(req.body);
    try {
        await contact.save();
        return res.status(201).json({
            message: 'Contact Info Successfully created'
        });
    } catch (err) {
        res.status(400).json({
            error: 'An error occured. The Contact Info could not be created.'
        });
    };
};

export default { createContact }