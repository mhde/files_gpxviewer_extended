var _MAX_POINT_INTERVAL_MS = 30000;
var _SECOND_IN_MILLIS = 1000;
var _MINUTE_IN_MILLIS = 60 * _SECOND_IN_MILLIS;
var _HOUR_IN_MILLIS = 60 * _MINUTE_IN_MILLIS;
var _DEFAULT_MARKER_OPTS = {
	startIconUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAyCAMAAADleEJoAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAWhQTFRFRIQT////RIQTRIQTRIQTRIQTRIQTRIQTRIQTR4YVSYgWRIQTTIsZS4oYRIQTRIQTRYUURIQTRIQTRIQTRIQTTIsZRIQTR4YVRIQTVZMgRIQTSokXVZIfWZYjWpcjRIQTRIQTbacxRIQTSIcWd684X5snT40bc6w1RIQTSIgWh71ERIQTerI6To0bVJIfWpcjRIQTRIQTRG4dRHEbRIQTRoYVSXEfSnYfSokXTXUiTYwaUH0jUY8cUoghUpAdU3wnV5QhWYgoWpcjW4EzW5EmXJklYoU8YpMuYp0pY54qZJwrZ5cxZ6IsaKIta6UwbKQwbKYwbqcxb6gycpBSdK02erI6gLc/gpxqhrxDi8BHjMFHjsBPjsJJkMRKkMVKlchOmcxRmshenc9UoNJWqb2SrNR3t8anvdievd2RyNK9yN6rzdXF1+fE2N/R3+vQ7Ozs8PLt8fHx8vjp9Pfw9fX1+vr6/f39////ZRAX+wAAADJ0Uk5TAAALFiItOENPT09aZHl7goKGjKStusLCyMjOzs7Oztre3uHh4uPk5Ozz8/X19vb3/P7XCCZCAAABoUlEQVQ4y83UaVOCQBjA8W1phUTSSlO7NDtFzQ66b8vu+7DL0rL7vv362S7Cggjvmv7vHuY3MAPPAiqsAn8ngBy08dU11bwNFi/oBCM0taaOT49TrU0CYyS4FjFXTGzhSoXQnqNrF/RCEHPaREEr2K6cvi6WFrA5e6Ev2wwp4YhmS4s6KOFPZ3Dvtxm1tF8VlR1npHz++epMqaNSEezWESlf6PFcHo62WEXwO4ekPO7+hEw7vCo2UqRv0scNnjYosbZP+iK9Xq7+TmuqQPE90ifuem568XeKI0XAzm3SW6G7hdHZTTx1QvV9eJbXcS8vD7tD4ytkWPZQb8zes4R7Ougfnl+S67HTX64xkcQNTCaLJRo137YqNqMvVqXdD+/ElLYJr26DUNuYtjak30JXeIQu7CrZU+gbpPPB0l23BSW1oM3ovNRSotbwRMEGBTRAQwG4bhl0c8anEgC3LNygnEAhDEKorAB1WNSB8gLfRL2FgQD1BVEPzAQXkSKcqWACUoAxFYXHUA8xFE7JaSG4Xs5CoD5kIUANsBLIUPyXP79pPwK/oqonPeNcAAAAAElFTkSuQmCC",
	endIconUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAyCAMAAADleEJoAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAASZQTFRFwyYm////wyYmwyYmwyYmwyYmwyYmwyYmwyYmxioqxywswyYmyDAwxy4uwyYmxCYmxScnwyYmxCYmxSYmxSYmyTAwxSYmxikpxScnzjs7xSYmyS0tzjs70EBA0UFBxiYmxyYm3VhYxyYmySsr42Rk1UhIyzMz4V9fyScnzCws7Xd3yScn5WhozjMz0To600FByScnyCYmnDk5nj4+oUREo0lJpU1Np1JSqVdXyicnyycnzCcnzScnzioq0C4u0jIy0zY21Dg41z4+2EFB2kRE3ExM3FFR3UtL3VdX3lZW4FJS4Fpa41lZ5mFh6Who6W9v6urq7G9v73Z28H198PDw8n1984CA84KC9YOD94iI9/f3+Y2N+Y6O+5KS/Pz8/ZWV/ZaW////bORD8gAAADJ0Uk5TAAALFiItOENPT09aZHl7goKGjKStusLCyMjOzs7Oztre3uHh4uPk5Ozz8/X19vb3/P7XCCZCAAABfElEQVQ4y83U11LCQBSA4XVhSSih9yK9hWYvgIoiCKKioliw4Pu/hJoTkk2B3Dn+Vxzmm4RJzoLWjEJ/J5AYttidHqfdghdfqISJi6fHk6fJOB3nTHqCXefni/h1Viu43Jwux6kFx8+V8ZxSMMVPdUWGFjgxe1c3S2BKOKpv2qoOSkSmL9qmEVmY88/QFyROebMkmMEjJIoDmAaMJOyje0gU+zCN7LIY3kEf0B5MQ0r0b6BXaBemvixI4xp6gHZgahBJ4MIVdAttw1TA8vMI9C6hLUj43AtQT8xWv9BWt9FvLtY9V9eNKd6ttXamrmZV7keoc6qsE1JtEMmeKMsS9Ra6y8d0ZbdmT3H4iC6MtbtuSbXlUha98+JtSqDp1T1ROCqJKNYViC2JoMTqn0qE/C0BtPxomSAZQWTIUoF8vz+26UPLhXAR+RI6AgVb7VYQrRJspV1hVwpTsp00rRQ/t6Fuoitchy4DwW6wBoJsEgOBPMhIEF3xX/75V/YN5QibzelgLDcAAAAASUVORK5CYII=",
	shadowUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABElJREFUWMPt2EuPFVUQAOA6dR79uI+ZUZiECRlZEKOyIQ5rw8INYa17N/4N+T2ydS+uCUhMNG6EQYgEB5zHvd19HvVwcQExYebOSFxopnvTSXfX19XnnK5KG4V/f0M4RU6RU+QUOUVOkVPk/4i4w06Yk8VZXP7GrkQPR44RFMG82l/GE9BX+/JMDg1uwGxhNB1mLKhGjBo1agAWB1YqruU831qAi5v0+K/LAG7hPq7YiGPsbUFCRkHGfpGLoozFcUNTEjrgj/imggDosREEc8lObWWdVQcObbLZFttZwYhgBAGMIjc8oabUqc2cawK+KaDHQwwYsBfsyF3wwU88enLsep9d76JNNtmCGwjwmwSuaDWP42o/GWjYzWu0wTdk+cC/ADo38evBhWnACisO5EeewnP/xKlly/gEAYxYPpvX06jzDmEqJI9kV5YPvAEEu+H2/buhrVyNdWzONKW+XeVQfPLk2AoyAoIBIBF5lmfD1H0ipuyVWMa0Y46FbLiuWq3bWlpqoX3Y3m64pkA+O3ZsBcGIgcXsEmVyAPNyL1z0M5twz0yWTmEDeN7NqklrRzS6OLk3Tq3UUlNVnFqxBQHFyMtVoigAgmLUPDOb8FQ7OIA7AAb0SOSi/cOv1jh203ry3dSMSqMVB/GABV/ksJh6CoqCLIRFckl1upuFLIfF0jw6k4hnQmg3Jw9WHk55QiOu2IMV+7fnVxQUYEtQTJIe52fnTzuNXBraebEcD0fMVQMW3Er1a/v7iMc04qYEQcCXACoICrJny1BMkawDdOuzvX2dUd+leQFehsDMfIDgyD+vXE2VBvbiXgccW0b2ZIsjyZo0lv69+c5M59R1A2RgWJoJbMGamZifrXfisgMrKLgAUJAtO7IlkMsua7YpDR8O0j/oXNcPXYQC9Ne360gkaYFNuAu0KDsGFGGRgaNQbK6yzz75yPHj4WDYi/sDxC6O8pxeJ45AFG7pgSbx/D7/oEGzOgFAteQolJCr7GMVTdwazg3z2EUfbeJcl7WyzSCvE0cVLf0Wplp00FW1asWKkEGkuoTsUh3rwQ/XhqY3UQZOJacCpaNtflVR4Jj1ZB2ea6ONes7sC6pRW5oUYjvY/np/pnd9iDGlPC9ShGey/QZgCXIVfoIWnFpx7EpruADXqe5Df7071497P4TECct9esw7ckveFH7ZmBgw6+aRCWA4FIlEAJjDcG2+0a31oz5Emw9yR8SP5ZLeOBQ4RvkVRSnkE4oa5MvpSlfN3+lXI8aUgXZ5Tb4QgJv6D7sVgDswhh72ZDv7waZWrpUwTPpp30RIQBO6L1+K0bdqiQAAnsGuzApFoE91RFVZiWsDpklp6Ef+TK7oW/ddYAA6Qf4lbepl03HLTYEEudCMv5Gv1Jzgz8/h15pb9nufQ/TeZq244SljyfyETwYc2a2A+Rwv2X2b7NjMlWRDQH7kr8Wc+N/VUch/reH+E4d5t00+dwaQAAAAAElFTkSuQmCC",
	iconSize: [33, 50],
	shadowSize: [50, 50],
	iconAnchor: [16, 45],
	shadowAnchor: [16, 47]
};
var _DEFAULT_POLYLINE_OPTS = {color: 'blue'};
L.GPX = L.FeatureGroup.extend({
	initialize: function (a, b) {
		b.max_point_interval = b.max_point_interval || _MAX_POINT_INTERVAL_MS;
		b.marker_options = this._merge_objs(_DEFAULT_MARKER_OPTS, b.marker_options || {});
		b.polyline_options = this._merge_objs(_DEFAULT_POLYLINE_OPTS, b.polyline_options || {});
		L.Util.setOptions(this, b);
		L.GPXTrackIcon = L.Icon.extend({options: b.marker_options});
		this._gpx = a;
		this._layers = {};
		this._info = {
			name: null,
			length: 0.0,
			elevation: {gain: 0.0, loss: 0.0, min: 9999, max: -1, _points: []},
			hr: {avg: 0, _total: 0, _points: []},
			duration: {start: null, end: null, moving: 0, total: 0},
			trackpoints: []
		};
		if (a) {
			this._parse(a, b, this.options.async)
		}
	}, get_trackpoints: function () {
		return this._info.trackpoints
	}, get_name: function () {
		return this._info.name
	}, get_author: function () {
		return this._info.author
	}, get_desc: function () {
		return this._info.desc
	}, get_distance: function () {
		return this._info.length
	}, get_moving_time: function () {
		return this._info.duration.moving
	}, get_total_time: function () {
		return this._info.duration.total
	}, get_moving_pace: function () {
		return this.get_moving_time() / (this.get_distance() / 1000)
	}, get_moving_speed: function () {
		return this.get_distance() / (this.get_moving_time() / (3.6 * 1000))
	}, get_elevation_gain: function () {
		return this._info.elevation.gain
	}, get_elevation_loss: function () {
		return this._info.elevation.loss
	}, get_average_hr: function () {
		return this._info.hr.avg
	}, get_ele_bounds: function () {
		return {min: this._info.elevation.min, max: this._info.elevation.max}
	}, reload: function () {
		this.clearLayers();
		this._parse(this._gpx, this.options, this.options.async)
	}, _merge_objs: function (a, b) {
		var _ = {};
		for (var c in a) {
			_[c] = a[c]
		}
		for (var c in b) {
			_[c] = b[c]
		}
		return _
	}, _prepare_data_point: function (p, a, b, c) {
		var r = [a && a(p[0]) || p[0], b && b(p[1]) || p[1]];
		r.push(c && c(r[0], r[1]) || (r[0] + ': ' + r[1]));
		return r
	}, _load_xml: function (a, b, c, d) {
		if (d == undefined)d = this.options.async;
		if (c == undefined)c = this.options;
		var f = new window.XMLHttpRequest();
		f.open('GET', a, d);
		try {
			f.overrideMimeType('text/xml')
		} catch (e) {
		}
		f.onreadystatechange = function () {
			if (f.readyState != 4)return;
			if (f.status == 200)b(f.responseXML, c)
		};
		f.send(null)
	}, _parse: function (d, e, f) {
		var g = this;
		var h = function (a, b) {
			var c = g._parse_gpx_data(a, b);
			if (!c)return;
			g.addLayer(c);
			g.fire('loaded')
		};
		if (d.substr(0, 1) === '<') {
			var i = new DOMParser();
			setTimeout(function () {
				h(i.parseFromString(d, "text/xml"), e)
			})
		} else {
			this._load_xml(d, h, e, f)
		}
	}, _parse_gpx_data: function (a, b) {
		var j, i, el, layers = [];
		var c = [['rte', 'rtept'], ['trkseg', 'trkpt']];
		var d = a.getElementsByTagName('name');
		if (d.length > 0) {
			this._info.name = d[0].textContent
		}
		var e = a.getElementsByTagName('desc');
		if (e.length > 0) {
			this._info.desc = e[0].textContent
		}
		var f = a.getElementsByTagName('author');
		if (f.length > 0) {
			this._info.author = f[0].textContent
		}
		var g = a.getElementsByTagName('copyright');
		if (g.length > 0) {
			this._info.copyright = g[0].textContent
		}
		var h = [];
		for (j = 0; j < c.length; j++) {
			el = a.getElementsByTagName(c[j][0]);
			for (i = 0; i < el.length; i++) {
				h.push(this._parse_trkseg(el[i], a, b, c[j][1]))
			}
		}
		for (i = 0; i < h.length; i++) {
			var l = new L.Polyline(h[i], b.polyline_options);
			this.fire('addline', {line: l});
			layers.push(l);
			if (b.marker_options.startIconUrl && i == 0) {
				var p = new L.Marker(h[i][0], {
					clickable: false,
					icon: new L.GPXTrackIcon({iconUrl: b.marker_options.startIconUrl})
				});
				this.fire('addpoint', {point: p});
				layers.push(p)
			}
			if (b.marker_options.endIconUrl && i == h.length - 1) {
				p = new L.Marker(h[i][h[i].length - 1], {
					clickable: false,
					icon: new L.GPXTrackIcon({iconUrl: b.marker_options.endIconUrl})
				});
				this.fire('addpoint', {point: p});
				layers.push(p)
			}
		}
		this._info.hr.avg = Math.round(this._info.hr._total / this._info.hr._points.length);
		if (!layers.length)return;
		var k = layers[0];
		if (layers.length > 1)k = new L.FeatureGroup(layers);
		return k
	}, _parse_trkseg: function (a, b, c, d) {
		var e = a.getElementsByTagName(d);
		if (!e.length)return [];
		var f = [];
		var g = null;
		for (var i = 0; i < e.length; i++) {
			var _, ll = new L.LatLng(e[i].getAttribute('lat'), e[i].getAttribute('lon'));
			ll.meta = {time: null, ele: null, hr: null, timeFromLast: 0, distFromLast: 0, milliSpeed: 0, distTotal: 0};
			_ = e[i].getElementsByTagName('time');
			if (_.length > 0) {
				ll.meta.time = new Date(Date.parse(_[0].textContent))
			}
			_ = e[i].getElementsByTagName('ele');
			if (_.length > 0) {
				var h = parseFloat(_[0].textContent);
				ll.meta.ele = h;
				if (h < this._info.elevation.min)this._info.elevation.min = h;
				if (h > this._info.elevation.max)this._info.elevation.max = h
			}
			_ = e[i].getElementsByTagNameNS('*', 'hr');
			if (_.length > 0) {
				ll.meta.hr = parseInt(_[0].textContent);
				this._info.hr._points.push([this._info.length, ll.meta.hr]);
				this._info.hr._total += ll.meta.hr
			}
			this._info.elevation._points.push([this._info.length, ll.meta.ele]);
			this._info.duration.end = ll.meta.time;
			if (g == null && this._info.trackpoints.length > 0) {
				g = this._info.trackpoints[this._info.trackpoints.length - 1]
			}
			if (g != null) {
				t = Math.abs(ll.meta.time - g.meta.time);
				if (t > 0) {
					this._info.duration.total += t;
					if (t < c.max_point_interval)this._info.duration.moving += t;
					ll.meta.timeFromLast = t;
					var j = ll.distanceTo(g);
					this._info.length += j;
					ll.meta.distFromLast = j;
					ll.meta.distTotal = this._info.length;
					ll.meta.milliSpeed = t * 1000 / j;
					var t = ll.meta.ele - g.meta.ele;
					if (t > 0) {
						this._info.elevation.gain += t
					} else {
						this._info.elevation.loss += Math.abs(t)
					}
					if (ll.meta.time != g.meta.time && ll.meta.ele > 0) {
						this._info.trackpoints.push(ll)
					}
				}
			} else {
				this._info.duration.start = ll.meta.time;
				this._info.trackpoints.push(ll)
			}
			g = ll;
			f.push(ll)
		}
		return f
	}
});