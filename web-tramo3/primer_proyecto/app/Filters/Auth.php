<?php
namespace App\Filters;
use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\Filters\FilterInterface;

class Auth implements FilterInterface
{
	public function before(RequestInterface $request, $arguments = null)
	{
	if (!session()->get('logged_in')){ //si el usuario no esta logueado
	return redirect()->to('/login');  //entonces redireciona a la pagina de login
	}
}
//------------------------------------------------------------------------
public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
{
//Do something here
}
}