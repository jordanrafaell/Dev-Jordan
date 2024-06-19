from flask import Flask, request, redirect, render_template_string

app = Flask(__name__)

@app.route('/submit', methods=['POST'])
def submit_form():
    # Processar os dados do formulário aqui
    # ...

    # Após o processamento bem-sucedido, redirecionar para a página de agradecimento
    return redirect('https://dev-jordan.vercel.app/obrigado.html')

if __name__ == '__main__':
    app.run()