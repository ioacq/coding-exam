// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    res.status(200).json({
        data: {
            id: '1234',
            firstName: 'John',
            lastName: 'Doe'
        }
    });
};