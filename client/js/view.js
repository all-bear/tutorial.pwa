var View = {
    createTopContent: document.getElementById('create-top'),
    viewTopContent: document.getElementById('view-top'),
    messageInput: document.getElementById('message-input'),
    authorInput: document.getElementById('author-input'),
    messageHolder: document.getElementById('message-holder'),
    authorHolder: document.getElementById('author-holder'),

    showCreateTop: function () {
        this.createTopContent.style.display = 'block';
        this.viewTopContent.style.display = 'none';

        return this;
    },
    showViewTop: function () {
        this.createTopContent.style.display = 'none';
        this.viewTopContent.style.display = 'block';

        return this;
    },
    clearCreateTop: function () {
        this.messageInput.value = '';
        this.authorInput.value = '';

        return this;
    },
    getTopData: function () {
        return {
            message: this.messageInput.value,
            author: this.authorInput.value
        }
    },
    updateTopData: function (data) {
        this.messageHolder.innerHTML = data.message;
        this.authorHolder.innerHTML = data.author;

        return this;
    }
};