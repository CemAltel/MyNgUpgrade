using System.Web.Mvc;

namespace MyNgUpgrade.Controllers
{
	public class ClaimsController : Controller
	{
		public ActionResult ClaimsList()
		{
			ViewBag.Message = "Claims List page governed by AngularJS";

			return PartialView();
		}
	}
}