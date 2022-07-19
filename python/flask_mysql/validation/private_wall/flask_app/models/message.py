from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash, request, session
from flask_app import app
import re

class Message():
    def __init__(self, data):
        self.id = data['id'],
        self.sender_id = data['sender_id'],
        self.sender = data['sender'],
        self.recipient_id = data['recipient_id'],
        self.message_content = data['message_content'],
        self.created_at = data['created_at'],
        self.updated_at = data['updated_at']

    @classmethod
    def get_messages(cls, id):

        input_id = {
            "id": id
        }

        query = "SELECT * FROM messages WHERE recipient_id = %(id)s;"
        result = connectToMySQL("userdb").query_db(query, input_id)

        all_user_messages = []

        for message in result:
            all_user_messages.append(cls(message))

        return all_user_messages



    @classmethod
    def send_message(cls, data):
        pass


    @staticmethod
    def validate_message(data):
        is_valid = True

        if len(data['message_content']) < 5:
            is_valid = False

        return is_valid