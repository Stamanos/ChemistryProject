using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Chemistry.Controllers
{
    public class VSEPRController : Controller
    {
        // GET: VSEPR
        public ActionResult Index()
        {
            return View();
        }

        // GET: VSEPR/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: VSEPR/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: VSEPR/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: VSEPR/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: VSEPR/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: VSEPR/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: VSEPR/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
