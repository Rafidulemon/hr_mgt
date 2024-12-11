# to create virtual environment in backend folder 
python3 -m venv python_venv

# to activate virtual environment 
source python_venv/bin/activate

# to install package from requirements.txt
pip install -r requirements.txt

# to start the fastapi backend server 
uvicorn app.main:app --reload

#  to start postgrss sever in linux 
sudo systemctl start postgresql
