using System.Web.Mvc;

namespace MyNgUpgrade.Controllers
{
	public class ContactController : Controller
	{
		public ActionResult Index()
		{
			ViewBag.Message = "Your contact page.";

			return PartialView();
		}
	}
}