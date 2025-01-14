// THIS FILE IS GENERATED BY ./scripts/testgen.mts

import { expect, test } from "@playwright/experimental-ct-react"

import LinePointSlopeExample from "../docs/components/guide-examples/LinePointSlopeExample"
import LineSegmentExample from "../docs/components/guide-examples/LineSegmentExample"
import LineThroughPointsExample from "../docs/components/guide-examples/LineThroughPointsExample"
import MovableCircle from "../docs/components/guide-examples/MovableCircle"
import MovableEllipse from "../docs/components/guide-examples/MovableEllipse"
import PlainMafsExample from "../docs/components/guide-examples/PlainMafsExample"
import PolygonExample from "../docs/components/guide-examples/PolygonExample"
import SnapPoint from "../docs/components/guide-examples/SnapPoint"
import TextExample from "../docs/components/guide-examples/TextExample"
import PizzaMarch from "../docs/components/guide-examples/custom/pizza-march"
import PointCloud from "../docs/components/guide-examples/custom/point-cloud"
import PaneVisualizerExample from "../docs/components/guide-examples/debug/PaneVisualizerExample"
import DynamicMovablePoints from "../docs/components/guide-examples/display/DynamicMovablePoints"
import PointsAlongFunction from "../docs/components/guide-examples/display/PointsAlongFunction"
import SimplePoint from "../docs/components/guide-examples/display/SimplePoint"
import FancyParabola from "../docs/components/guide-examples/examples/FancyParabola"
import ProjectileMotion from "../docs/components/guide-examples/examples/ProjectileMotion"
import Riemann from "../docs/components/guide-examples/examples/Riemann"
import Draggable from "../docs/components/guide-examples/hello-fx/draggable"
import Plain from "../docs/components/guide-examples/hello-fx/plain"
import SinePi from "../docs/components/guide-examples/hello-fx/sine-pi"
import Sine from "../docs/components/guide-examples/hello-fx/sine"
import Subdivisions from "../docs/components/guide-examples/hello-fx/subdivisions"
import OfXAndY from "../docs/components/guide-examples/plots/of-x-and-y"
import SineStressTest from "../docs/components/guide-examples/plots/sine-stress-test"
import TwistyBoi from "../docs/components/guide-examples/plots/twisty-boi"
import SimpleTransform from "../docs/components/guide-examples/utility/SimpleTransform"
import CartesianCoordinatesConfigExample from "../docs/components/guide-examples/display/coordinates/CartesianCoordinatesConfigExample"
import CartesianCoordinatesExample from "../docs/components/guide-examples/display/coordinates/CartesianCoordinatesExample"
import PolarCoordinatesExample from "../docs/components/guide-examples/display/coordinates/PolarCoordinatesExample"
import VectorExample from "../docs/components/guide-examples/display/vectors/VectorExample"
import ContainViewbox from "../docs/components/guide-examples/display/viewbox/ContainViewbox"
import StretchViewbox from "../docs/components/guide-examples/display/viewbox/StretchViewbox"
import ZoomExample from "../docs/components/guide-examples/display/viewbox/ZoomExample"

test("guide-examples/LinePointSlopeExample", async ({ mount, page }) => {
  const component = await mount(<LinePointSlopeExample />)
  ;(await component.locator(".MafsView").count()) === 0
    ? await expect(component).toHaveClass("MafsView")
    : await expect(component.locator(".MafsView")).toHaveClass("MafsView")
  await expect(page).toHaveScreenshot()
})

test("guide-examples/LineSegmentExample", async ({ mount, page }) => {
  const component = await mount(<LineSegmentExample />)
  ;(await component.locator(".MafsView").count()) === 0
    ? await expect(component).toHaveClass("MafsView")
    : await expect(component.locator(".MafsView")).toHaveClass("MafsView")
  await expect(page).toHaveScreenshot()
})

test("guide-examples/LineThroughPointsExample", async ({ mount, page }) => {
  const component = await mount(<LineThroughPointsExample />)
  ;(await component.locator(".MafsView").count()) === 0
    ? await expect(component).toHaveClass("MafsView")
    : await expect(component.locator(".MafsView")).toHaveClass("MafsView")
  await expect(page).toHaveScreenshot()
})

test("guide-examples/MovableCircle", async ({ mount, page }) => {
  const component = await mount(<MovableCircle />)
  ;(await component.locator(".MafsView").count()) === 0
    ? await expect(component).toHaveClass("MafsView")
    : await expect(component.locator(".MafsView")).toHaveClass("MafsView")
  await expect(page).toHaveScreenshot()
})

test("guide-examples/MovableEllipse", async ({ mount, page }) => {
  const component = await mount(<MovableEllipse />)
  ;(await component.locator(".MafsView").count()) === 0
    ? await expect(component).toHaveClass("MafsView")
    : await expect(component.locator(".MafsView")).toHaveClass("MafsView")
  await expect(page).toHaveScreenshot()
})

test("guide-examples/PlainMafsExample", async ({ mount, page }) => {
  const component = await mount(<PlainMafsExample />)
  ;(await component.locator(".MafsView").count()) === 0
    ? await expect(component).toHaveClass("MafsView")
    : await expect(component.locator(".MafsView")).toHaveClass("MafsView")
  await expect(page).toHaveScreenshot()
})

test("guide-examples/PolygonExample", async ({ mount, page }) => {
  const component = await mount(<PolygonExample />)
  ;(await component.locator(".MafsView").count()) === 0
    ? await expect(component).toHaveClass("MafsView")
    : await expect(component.locator(".MafsView")).toHaveClass("MafsView")
  await expect(page).toHaveScreenshot()
})

test("guide-examples/SnapPoint", async ({ mount, page }) => {
  const component = await mount(<SnapPoint />)
  ;(await component.locator(".MafsView").count()) === 0
    ? await expect(component).toHaveClass("MafsView")
    : await expect(component.locator(".MafsView")).toHaveClass("MafsView")
  await expect(page).toHaveScreenshot()
})

test("guide-examples/TextExample", async ({ mount, page }) => {
  const component = await mount(<TextExample />)
  ;(await component.locator(".MafsView").count()) === 0
    ? await expect(component).toHaveClass("MafsView")
    : await expect(component.locator(".MafsView")).toHaveClass("MafsView")
  await expect(page).toHaveScreenshot()
})

test("guide-examples/custom/PizzaMarch", async ({ mount, page }) => {
  const component = await mount(<PizzaMarch />)
  ;(await component.locator(".MafsView").count()) === 0
    ? await expect(component).toHaveClass("MafsView")
    : await expect(component.locator(".MafsView")).toHaveClass("MafsView")
  await expect(page).toHaveScreenshot()
})

test("guide-examples/custom/PointCloud", async ({ mount, page }) => {
  const component = await mount(<PointCloud />)
  ;(await component.locator(".MafsView").count()) === 0
    ? await expect(component).toHaveClass("MafsView")
    : await expect(component.locator(".MafsView")).toHaveClass("MafsView")
  await expect(page).toHaveScreenshot()
})

test("guide-examples/debug/PaneVisualizerExample", async ({ mount, page }) => {
  const component = await mount(<PaneVisualizerExample />)
  ;(await component.locator(".MafsView").count()) === 0
    ? await expect(component).toHaveClass("MafsView")
    : await expect(component.locator(".MafsView")).toHaveClass("MafsView")
  await expect(page).toHaveScreenshot()
})

test("guide-examples/display/DynamicMovablePoints", async ({ mount, page }) => {
  const component = await mount(<DynamicMovablePoints />)
  ;(await component.locator(".MafsView").count()) === 0
    ? await expect(component).toHaveClass("MafsView")
    : await expect(component.locator(".MafsView")).toHaveClass("MafsView")
  await expect(page).toHaveScreenshot()
})

test("guide-examples/display/PointsAlongFunction", async ({ mount, page }) => {
  const component = await mount(<PointsAlongFunction />)
  ;(await component.locator(".MafsView").count()) === 0
    ? await expect(component).toHaveClass("MafsView")
    : await expect(component.locator(".MafsView")).toHaveClass("MafsView")
  await expect(page).toHaveScreenshot()
})

test("guide-examples/display/SimplePoint", async ({ mount, page }) => {
  const component = await mount(<SimplePoint />)
  ;(await component.locator(".MafsView").count()) === 0
    ? await expect(component).toHaveClass("MafsView")
    : await expect(component.locator(".MafsView")).toHaveClass("MafsView")
  await expect(page).toHaveScreenshot()
})

test("guide-examples/examples/FancyParabola", async ({ mount, page }) => {
  const component = await mount(<FancyParabola />)
  ;(await component.locator(".MafsView").count()) === 0
    ? await expect(component).toHaveClass("MafsView")
    : await expect(component.locator(".MafsView")).toHaveClass("MafsView")
  await expect(page).toHaveScreenshot()
})

test("guide-examples/examples/ProjectileMotion", async ({ mount, page }) => {
  const component = await mount(<ProjectileMotion />)
  ;(await component.locator(".MafsView").count()) === 0
    ? await expect(component).toHaveClass("MafsView")
    : await expect(component.locator(".MafsView")).toHaveClass("MafsView")
  await expect(page).toHaveScreenshot()
})

test("guide-examples/examples/Riemann", async ({ mount, page }) => {
  const component = await mount(<Riemann />)
  ;(await component.locator(".MafsView").count()) === 0
    ? await expect(component).toHaveClass("MafsView")
    : await expect(component.locator(".MafsView")).toHaveClass("MafsView")
  await expect(page).toHaveScreenshot()
})

test("guide-examples/hello-fx/Draggable", async ({ mount, page }) => {
  const component = await mount(<Draggable />)
  ;(await component.locator(".MafsView").count()) === 0
    ? await expect(component).toHaveClass("MafsView")
    : await expect(component.locator(".MafsView")).toHaveClass("MafsView")
  await expect(page).toHaveScreenshot()
})

test("guide-examples/hello-fx/Plain", async ({ mount, page }) => {
  const component = await mount(<Plain />)
  ;(await component.locator(".MafsView").count()) === 0
    ? await expect(component).toHaveClass("MafsView")
    : await expect(component.locator(".MafsView")).toHaveClass("MafsView")
  await expect(page).toHaveScreenshot()
})

test("guide-examples/hello-fx/SinePi", async ({ mount, page }) => {
  const component = await mount(<SinePi />)
  ;(await component.locator(".MafsView").count()) === 0
    ? await expect(component).toHaveClass("MafsView")
    : await expect(component.locator(".MafsView")).toHaveClass("MafsView")
  await expect(page).toHaveScreenshot()
})

test("guide-examples/hello-fx/Sine", async ({ mount, page }) => {
  const component = await mount(<Sine />)
  ;(await component.locator(".MafsView").count()) === 0
    ? await expect(component).toHaveClass("MafsView")
    : await expect(component.locator(".MafsView")).toHaveClass("MafsView")
  await expect(page).toHaveScreenshot()
})

test("guide-examples/hello-fx/Subdivisions", async ({ mount, page }) => {
  const component = await mount(<Subdivisions />)
  ;(await component.locator(".MafsView").count()) === 0
    ? await expect(component).toHaveClass("MafsView")
    : await expect(component.locator(".MafsView")).toHaveClass("MafsView")
  await expect(page).toHaveScreenshot()
})

test("guide-examples/plots/OfXAndY", async ({ mount, page }) => {
  const component = await mount(<OfXAndY />)
  ;(await component.locator(".MafsView").count()) === 0
    ? await expect(component).toHaveClass("MafsView")
    : await expect(component.locator(".MafsView")).toHaveClass("MafsView")
  await expect(page).toHaveScreenshot()
})

test("guide-examples/plots/SineStressTest", async ({ mount, page }) => {
  const component = await mount(<SineStressTest />)
  ;(await component.locator(".MafsView").count()) === 0
    ? await expect(component).toHaveClass("MafsView")
    : await expect(component.locator(".MafsView")).toHaveClass("MafsView")
  await expect(page).toHaveScreenshot()
})

test("guide-examples/plots/TwistyBoi", async ({ mount, page }) => {
  const component = await mount(<TwistyBoi />)
  ;(await component.locator(".MafsView").count()) === 0
    ? await expect(component).toHaveClass("MafsView")
    : await expect(component.locator(".MafsView")).toHaveClass("MafsView")
  await expect(page).toHaveScreenshot()
})

test("guide-examples/utility/SimpleTransform", async ({ mount, page }) => {
  const component = await mount(<SimpleTransform />)
  ;(await component.locator(".MafsView").count()) === 0
    ? await expect(component).toHaveClass("MafsView")
    : await expect(component.locator(".MafsView")).toHaveClass("MafsView")
  await expect(page).toHaveScreenshot()
})

test("guide-examples/display/coordinates/CartesianCoordinatesConfigExample", async ({
  mount,
  page,
}) => {
  const component = await mount(<CartesianCoordinatesConfigExample />)
  ;(await component.locator(".MafsView").count()) === 0
    ? await expect(component).toHaveClass("MafsView")
    : await expect(component.locator(".MafsView")).toHaveClass("MafsView")
  await expect(page).toHaveScreenshot()
})

test("guide-examples/display/coordinates/CartesianCoordinatesExample", async ({ mount, page }) => {
  const component = await mount(<CartesianCoordinatesExample />)
  ;(await component.locator(".MafsView").count()) === 0
    ? await expect(component).toHaveClass("MafsView")
    : await expect(component.locator(".MafsView")).toHaveClass("MafsView")
  await expect(page).toHaveScreenshot()
})

test("guide-examples/display/coordinates/PolarCoordinatesExample", async ({ mount, page }) => {
  const component = await mount(<PolarCoordinatesExample />)
  ;(await component.locator(".MafsView").count()) === 0
    ? await expect(component).toHaveClass("MafsView")
    : await expect(component.locator(".MafsView")).toHaveClass("MafsView")
  await expect(page).toHaveScreenshot()
})

test("guide-examples/display/vectors/VectorExample", async ({ mount, page }) => {
  const component = await mount(<VectorExample />)
  ;(await component.locator(".MafsView").count()) === 0
    ? await expect(component).toHaveClass("MafsView")
    : await expect(component.locator(".MafsView")).toHaveClass("MafsView")
  await expect(page).toHaveScreenshot()
})

test("guide-examples/display/viewbox/ContainViewbox", async ({ mount, page }) => {
  const component = await mount(<ContainViewbox />)
  ;(await component.locator(".MafsView").count()) === 0
    ? await expect(component).toHaveClass("MafsView")
    : await expect(component.locator(".MafsView")).toHaveClass("MafsView")
  await expect(page).toHaveScreenshot()
})

test("guide-examples/display/viewbox/StretchViewbox", async ({ mount, page }) => {
  const component = await mount(<StretchViewbox />)
  ;(await component.locator(".MafsView").count()) === 0
    ? await expect(component).toHaveClass("MafsView")
    : await expect(component.locator(".MafsView")).toHaveClass("MafsView")
  await expect(page).toHaveScreenshot()
})

test("guide-examples/display/viewbox/ZoomExample", async ({ mount, page }) => {
  const component = await mount(<ZoomExample />)
  ;(await component.locator(".MafsView").count()) === 0
    ? await expect(component).toHaveClass("MafsView")
    : await expect(component.locator(".MafsView")).toHaveClass("MafsView")
  await expect(page).toHaveScreenshot()
})
