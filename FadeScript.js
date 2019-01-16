#pragma strict

var timer : float = 10.0;

function Start () 
{
	renderer.material.color.a = 1;
	GameObject.Find("First Person Controller").GetComponent(FPSInputController).enabled = false;
	GameObject.Find("First Person Controller").GetComponent(MouseLook).enabled = false;
	GameObject.Find("Main Camera").GetComponent(MouseLook).enabled = false;
}

function Update()
{

	timer = timer - Time.deltaTime;
	
	if(timer >= 0)
	{
		renderer.material.color.a -= 0.1 * Time.deltaTime;
	}
	
	if(timer <= 0)
	{
		timer = 0;
		GameObject.Find("First Person Controller").GetComponent(FPSInputController).enabled = true;
		GameObject.Find("First Person Controller").GetComponent(MouseLook).enabled = true;
		GameObject.Find("Main Camera").GetComponent(MouseLook).enabled = true;
		Destroy(gameObject);
	}
	
	
}
