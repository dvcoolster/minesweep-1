

module.exports = {
    renderGamePage: renderGamePage
};


/**
 * render game page template
 * @param req
 * @param res
 */
function renderGamePage(req, res) {
    res.sendFile('views/index.html', {root: __base__});
}