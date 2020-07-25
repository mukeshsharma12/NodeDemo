var userModel = require('../model/user.model');

async function partnersRequests(req, res, next) {
    let where = '';
    let startDate = req.body.startDate == null || req.body.startDate == "" || req.body.startDate == 'undefined' ? "" : req.body.startDate;
    let endDate = req.body.endDate == null || req.body.endDate == "" || req.body.endDate == 'undefined' ? "" : req.body.endDate;
    if(startDate != '' && endDate != '') {
        where = ` WHERE DATE(rc.created_at) BETWEEN '${startDate}' AND '${endDate}' `;
    }
    var pcData = await userModel.getAllPartnersRequests(where);
    if(pcData.length > 0) {
        res.json({ 'status': 'success', 'data': pcData });
    } else {
        res.json({ 'status': 'failed', 'message': 'No data found!' });
    }
    res.end();
};

async function addRequest(req, res) {
    var today = new Date();
    var mnth = today.getMonth() + 1;
    var dt = today.getDate();
    if (mnth < 10) {
        mnth = '0' + mnth;
    }
    if (dt < 10) {
        dt = '0' + dt;
    }
    var date = today.getFullYear() + '-' + mnth + '-' + dt;
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var curDateTime = date + ' ' + time;

    var partner_id = req.body.partner_id;
    
    var insertArr = '';    
    insertArr += `partner_id=${partner_id},
    created_at='${curDateTime}'`;
    var partnerReq = await userModel.addPartnerRequest(insertArr);
    if (partnerReq[0] > 0) {
        res.json({ 'status': 'success', 'message': 'Requested Successfully.' });
    } else {
        res.json({ 'status': 'failed', 'message': 'Could not inserted!' });
    }
    res.end();
}

module.exports = {
    partnersRequests: partnersRequests,
    addRequest: addRequest
}