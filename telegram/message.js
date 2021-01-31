class Message {
    getInlineKeyboardButton(text) {
        return [{
            text: text,
            callback_data: 'somedata'
        }]
    }

    getInlineKeyboardMarkup(text) {
        return {inline_keyboard: [this.getInlineKeyboardButton(text)]}
    }
}

module.exports = Message