from flask import Flask, render_template, request, jsonify
import os

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/generate-card', methods=['POST'])
def generate_card():
    data = request.get_json()
    
    # Basic validation
    name = data.get('name')
    bio = data.get('bio')
    image_url = data.get('image_url')
    
    if not name or not bio or not image_url:
        return jsonify({'error': 'All fields are required.'}), 400
        
    # In a real application, we might save this to a database,
    # but here we're just processing it and passing it back.
    profile_data = {
        'name': name.strip(),
        'bio': bio.strip(),
        'image_url': image_url.strip()
    }
    
    return jsonify({'message': 'Profile generated successfully', 'profile': profile_data}), 200

if __name__ == '__main__':
    # Use a different port if task_1 is still running
    app.run(port=5001, debug=True)
